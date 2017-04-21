<?php
class NongTraiRauQua {
	const COLLECTION = 'nongtrairauqua';
	private $_mongo;
	private $_collection;

	public $id = '';
	public $id_dmnongtrai = '';
	public $tieuchuan = '';
	public $sochungnhantieuchuan = '';
	public $ngaythuhoach = '';
	public $matruyxuatsanpham = '';
	public $soluong = '';
	public $soxevanchuyen = '';
	public $tentaixe = '';
	public $hienthi = 0;
	public $date_post = '';
	public $id_user = '';
	public $id_congty = '';

	public function __construct(){
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(NongTraiRauQua::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('date_post'=>-1));
	}

	public function get_list_by_congty(){
		$query = array('id_congty' => new MongoId($this->id_congty));
		return $this->_collection->find($query)->sort(array('date_post'=>-1));	
	}

	public function get_list_condition($condition){
		return $this->_collection->find($condition)->sort(array('date_post'=>-1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'id_dmnongtrai' => $this->id_dmnongtrai ? new MongoId($this->id_dmnongtrai) : '',
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaythuhoach' => $this->ngaythuhoach,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'soluong' => intval($this->soluong),			
			'soxevanchuyen' => $this->soxevanchuyen,
			'tentaixe' => $this->tentaixe,			
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''
		);
		return $this->_collection->insert($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'id_dmnongtrai' => $this->id_dmnongtrai ? new MongoId($this->id_dmnongtrai) : '',
			'tieuchuan' => $this->tieuchuan,
			'sochungnhantieuchuan' => $this->sochungnhantieuchuan,
			'ngaythuhoach' => $this->ngaythuhoach,
			'matruyxuatsanpham' => $this->matruyxuatsanpham,
			'soluong' => intval($this->soluong),			
			'soxevanchuyen' => $this->soxevanchuyen,
			'tentaixe' => $this->tentaixe,			
			'hienthi' => intval($this->hienthi),
			'date_post' => new MongoDate(),
			'id_user' => $this->id_user ? new MongoId($this->id_user) : '',
			'id_congty' => $this->id_congty ? new MongoId($this->id_congty) : ''));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function set_hienthi($v){
		$query = array('$set' => array('hienthi' => $v));
		$condition = array('_id' => new MongoId($this->id));
		return $this->_collection->update($condition, $query);
	}

	public function delete(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->remove($query);
	}

	public function check_dmnongtrai($id_dmnongtrai){
		$query = array('id_dmnongtrai' => new MongoId($id_dmnongtrai));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if($result['_id']) return true;
		return false;
	}

	public function check_dmcongty($id_congty){
		$query = array('id_congty' => new MongoId($id_congty));
		$field = array('_id' => true);
		$result = $this->_collection->findOne($query, $field);
		if(isset($result['_id']) && $result['_id']) return true;
		else return false;
	}
}
?>