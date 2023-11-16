

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const heads = [];
    while(true){
        if (head == null) return false;
        if(heads.includes(head)){
            return true;
        }else{
            heads.push(head);
            head = head.next;
        }
    }

};