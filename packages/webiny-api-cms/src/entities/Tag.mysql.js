// @flow
import MySQLTable from "../install/tables/mysqlTable";

class TagTable extends MySQLTable {
    constructor() {
        super();
        this.column("name").varChar(100);
    }
}

TagTable.setName("Cms_Tags");

export default TagTable;