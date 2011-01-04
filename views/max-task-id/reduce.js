function(keys, values, rereduce) {
var max = 0;
for( i in values ) {
    log( "\n\n" + values[i] + "\n\n");
    if (values[i] > max) {
        max = values[i];
    }
}

return max;
}