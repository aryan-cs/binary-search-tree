function Node (val, X, Y) {

    this.value = val;
    this.left = null;
    this.right = null;
    this.x = X;
    this.y = Y;
  
}

nodes = 0;

Node.prototype.addNode = function (node) {

    if (node.value < this.value) {
  
        if (this.left == null) {

            nodes++;
        
            this.left = node;
            this.left.x = this.x - 2 * (HORIZONTAL_OFFSET - (this.left.value) * (0.5 * Math.pow(nodes, 1.0/5.0)));
            this.left.y = this.y + VERTICAL_OFFSET;
    
        }
      
        else { this.left.addNode(node); }
  
    }
  
    else {
        
        if (this.right == null) {

            nodes++;
            
            this.right = node;
            this.right.x = this.x + 0.75 *  limit((HORIZONTAL_OFFSET + (this.right.value) * (0.5 * Math.pow(nodes, 1.0/3.0))), HORIZONTAL_OFFSET, HORIZONTAL_OFFSET * 2.8);
            this.right.y = this.y + VERTICAL_OFFSET;
        
        }

        else { this.right.addNode(node); }
    
    }
  
}

Node.prototype.display = function (parent) {

    stroke(ACCENT_1);
    if (this != tree.root) { line(parent.x, parent.y + NODE_SIZE / 2, this.x, this.y - NODE_SIZE); }

    fill(ACCENT_2);
    circle(this.x, this.y - NODE_SIZE / 2.85, NODE_SIZE * 1.6);

    fill(BACKGROUND_COLOR);
    textSize(NODE_SIZE);
    textFont(defaultFont);
    textAlign(CENTER)
    text(this.value, this.x, this.y);
}

Node.prototype.visit = function (parent) {

    if (this.left !== null) { this.left.visit(this); }
    this.display(parent);
    if (this.right !== null) { this.right.visit(this); }

}

Node.prototype.search = function (val) {

    queries++;

    if (this.value == val) { return this; }
    else if (this.value > val && this.left !== null) { return this.left.search(val); }
    else if (this.value < val && this.right !== null) { return this.right.search(val); }

    return null;

}