<?php
namespace Models;
class Users{
	const COLLECTION = 'users';
	public $id = '';
	public $username = '';
	public $password = '';
	public $roles = 0;
	public $person = '';
	public $hinhanh = '';
	public $id_congty = '';
	public $logs = '';
	private $_mongo;
	private $_collection;
	private $_user;

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		//$this->_collection = $this->_mongo->getCollection(Users::COLLECTION);
		$this->_collection = $this->_mongo->users;
		if ($this->isLoggedIn()) $this->_loadData();
	}

	public function get_list(){
		return $this->_collection->find();
	}

	public function get_list_50(){
		return $this->_collection->find()->limit(50);
	}

	public function get_one(){
		return $this->_collection->findOne(array('_id'=>DBConnect::ObjectId($this->id)));
	}

	public function get_one_default(){
		$id_user = $this->get_userid();
		return $this->_collection->findOne(array('_id'=>DBConnect::ObjectId($id_user)));
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition);
	}

	public function check_exist_username(){
		$query = array('username'=> $this->username);
		$result = $this->_collection->findOne($query);
		if($result['_id']) return true;
		return false;
	}

	public function insert(){
		$query = array(
			'username'=> $this->username,
			'password'=>md5($this->password),
			'roles'=>$this->roles,
			'person'=>$this->person,
			'hinhanh' => $this->hinhanh,
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : '');
		return $this->_collection->insert($query);
	}
	public function push_logs_in(){
		$query = array('$push' => array('logs' => array('in' => DBConnect::setDate())));
		$condition = array('_id' => DBConnect::ObjectId($this->get_userid()));
		return $this->_collection->updateOne($condition, $query);
	}
	public function push_logs_out(){
		$query = array('$push' => array('logs' => array('out' => DBConnect::setDate())));
		$condition = array('_id' => DBConnect::ObjectId($this->get_userid()));
		return $this->_collection->updateOne($condition, $query);
	}
	public function edit(){
		$condition = array('_id'=> DBConnect::ObjectId($this->id));
		$query = array('$set' => array(
			'username'=> $this->username,
			'password'=>md5($this->password),
			'roles'=>$this->roles,
			'person'=>$this->person,
			'hinhanh' => $this->hinhanh,
			'id_congty' => $this->id_congty ? DBConnect::ObjectId($this->id_congty) : ''));
		return $this->_collection->updateOne($condition, $query);
	}

	public function change_password(){
		$query = array('$set' => array('password' => md5($this->password)));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}

	public function reset_password(){
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		$query = array('$set' => array('password' => md5($this->password)));
		return $this->_collection->updateOne($condition, $query);
	}

	public function delete(){
		return $this->_collection->deleteOne(array('_id'=> DBConnect::ObjectId($this->id)));
	}

	//public function insert_list(){

	//}
	public function isLoggedIn() {
		return isset($_SESSION['user_id']);
	}

	public function getRole(){
		return $_SESSION['roles'];
	}

	public function get_username(){
		$result = $this->_collection->findOne(array("_id"=>DBConnect::ObjectId($_SESSION['user_id'])), array('username'=>true));
		return $result['username'];
	}

	public function get_userid(){
		return $_SESSION['user_id'];
	}

	public function get_id_congty(){
		return $_SESSION['id_congty'];
	}

	public function is_admin(){
		return ($_SESSION['roles'] & ADMIN);
	}

	public function is_farmer(){
		return ($_SESSION['roles'] & FARMER);
	}

	public function is_factory(){
		return ($_SESSION['roles'] & FACTORY);
	}

	public function is_packer(){
		return ($_SESSION['roles'] & PACKER);
	}

	public function is_retail(){
		return ($_SESSION['roles'] & RETAIL);
	}

	public function authenticate($username, $password){
		$query = array(
			'username' => $username,
			'password' => md5($password)
		);

		$this->_user = $this->_collection->findOne($query);
		if (empty($this->_user)) return false;
			$_SESSION['user_id'] = strval($this->_user['_id']);
			$_SESSION['id_congty'] = strval($this->_user['id_congty']);
			$_SESSION['roles'] = intval($this->_user['roles']);
			return true;
	}

	public function logout(){
		unset($_SESSION['user_id']);
		session_destroy();
	}

	private function _loadData() {
		$id = DBConnect::ObjectId($_SESSION['user_id']);
		$this->_user = $this->_collection->findOne(array('_id' => $id));
	}

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => DBConnect::ObjectId($id_congty));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}
}

?>
