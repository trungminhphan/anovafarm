<?php
namespace Models;
class HienThi {
	const COLLECTION = 'hienthi';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $giaidoan = '';
	public $tengiaidoan = '';
	public $title = '';
	public $hinhanh = '';

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->hienthi;
	}

	public function get_all_list(){
		return $this->_collection->find(array(),array('sort' => array('ten'=>-1)));
	}

	public function get_one(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->findOne($query);
	}

	public function get_one_condition($condition){
		return $this->_collection->findOne($condition);
	}

	public function insert(){
		$query = array(
			'giaidoan' => $this->giaidoan,
			'tengiaidoan' => $this->tengiaidoan,
			'title' => $this->title,
			'hinhanh' => $this->hinhanh,
			'date_post' => DBConnect::setDate()
		);
		return $this->_collection->insertOne($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'giaidoan' => $this->giaidoan,
			'tengiaidoan' => $this->tengiaidoan,
			'title' => $this->title,
			'hinhanh' => $this->hinhanh
		));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}
}
?>
