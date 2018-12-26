<?php
namespace Models;
class DanhMucBanLe {
    const COLLECTION = 'danhmucbanle';
    private $_mongo;
    private $_collection;

    public $id = '';
    public $ten = '';
    public $diachi = '';
    public $date_post = '';

    public function __construct(){
        $this->_mongo = DBConnect::getDB();
        $this->_collection = $this->_mongo->danhmucbanle;
    }

    public function get_all_list(){
        return $this->_collection->find(array(), array('sort' => array('date_post'=>-1)));
    }

    public function get_list_condition($condition){
        return $this->_collection->find($condition, array('sort' => array('ten'=>-1)));
    }

    public function get_one(){
        $query = array('_id' => DBConnect::ObjectId($this->id));
        return $this->_collection->findOne($query);
    }

    public function insert(){
        $query = array(
            'ten' => $this->ten,
            'diachi' => $this->diachi
        );
        return $this->_collection->insertOne($query);
    }

    public function edit(){
        $query = array('$set' => array(
            'ten' => $this->ten,
            'diachi' => $this->diachi
        ));
        $condition = array('_id' => DBConnect::ObjectId($this->id));
        return $this->_collection->updateOne($condition, $query);
    }

    public function delete(){
        $query = array('_id' => DBConnect::ObjectId($this->id));
        return $this->_collection->deleteOne($query);
    }

    public function search($search){
        $this->_collection->createIndex(array('ten' => 'text', 'diachi' => 'text'));
        $query = array('$text' => array('$search' => $search));
        /*$query = array('$or' => array(
            array('ten' => new MongoRegex('/' . $search . '/i')),
            array('diachi' => new MongoRegex('/' . $search . '/i'))
        ));*/
        return $this->_collection->find($query);
    }

}
?>
