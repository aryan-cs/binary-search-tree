function Tree () {

    this.root = null;
  
}
  
Tree.prototype.addNode = function (nodeValue) {
  
    var node = new Node(nodeValue);
  
    if (this.root == null) {
        
        this.root = node;
        this.root.x = width / 2;
        this.root.y = 120;
    
    }

    else { this.root.addNode(node); }
  
}

Tree.prototype.traverse = function () {
  
    this.root.visit(this.root);
  
}

Tree.prototype.search = function (value) {

    queries = 0;
    return this.root.search(value);

}