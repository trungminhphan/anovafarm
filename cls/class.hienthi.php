<?php
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
		$this->_mongo = DBConnect::init();
		$this->_collection = $this->_mongo->getCollection(HienThi::COLLECTION);
	}

	public function get_all_list(){
		return $this->_collection->find()->sort(array('ten'=>-1));
	}

	public function get_one(){
		$query = array('_id' => new MongoId($this->id));
		return $this->_collection->findOne($query);
	}

	public function insert(){
		$query = array(
			'giaidoan' => $this->giaidoan,
			'tengiaidoan' => $this->tengiaidoan,
			'title' => $this->title,
			'hinhanh' => $this->hinhanh,
			'date_post' => new MongoDate()
		);
		return $this->_collection->insert($query);
	}
}
?>