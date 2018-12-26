<?php
namespace Models;
class Config {
	const COLLECTION = 'config';
	private $_mongo;
	private $_collection;

	public $id = '5940e91fa401839c2100002b';
	public $title = '';
	public $text = '';
	public $image = '';

	public function __construct(){
		$this->_mongo = DBConnect::getDB();
		$this->_collection = $this->_mongo->{Config::COLLECTION};
	}

	public function get_one(){
		$query = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->findOne($query);
	}

	public function edit(){
		$query = array('$set' => array(
			'title' => $this->title,
			'text' => $this->text,
			'image' => $this->image
		));
		$condition = array('_id' => DBConnect::ObjectId($this->id));
		return $this->_collection->updateOne($condition, $query);
	}
}
?>
