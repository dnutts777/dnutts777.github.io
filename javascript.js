$("input.row-input").blur(function() {
    updateTotal();
});

//alert( $(".row-total:eq(0)").html() );
//$(".row-total:eq(0)").html("x"); //this sets the first row total
//$(".row-total:eq(1)").html("y"); //this sets the second row total


function updateTotal() {
    var rowCount = document.getElementById("tableID").getElementsByTagName("TR").length;  //this is 3
    
    table = document.getElementsByTagName("tbody")[0];
    allrows = table.getElementsByTagName("tr");
    //console.log(table); //this is the entire table
    //console.log(allrows); //this gets all the <tr>s of the table
    
    for (i=1; i < allrows.length; i++) {
        //row_cells = allrows[i].getElementsByTagName("input");
        //console.log(allrows[i].getElementsByTagName("input").length); //the number of inputs in the row
        rowTotal = 0;
        for (ii=0; ii < allrows[i].getElementsByTagName("input").length; ii++) {
            //console.log(allrows[i].getElementsByTagName("input")[ii].value);
            rowTotal = rowTotal + Number(allrows[i].getElementsByTagName("input")[ii].value);
        }
        //console.log(rowTotal); // this is the total of the row
            $(".row-total:eq("+(i-1)+")").html(rowTotal);
    }
}

updateTotal();
