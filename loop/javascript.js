document.write("<table 3px solid green>")
for(let i=0; i<=10; i++){
    document.write('<tr>');
    for(let j=0;j<=10;j++){
        document.write('<td>'+i*j+'</td>');
    }
    document.write('</tr>');
}
document.write('</table>');