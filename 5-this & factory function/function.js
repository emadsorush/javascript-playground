function name() {
    console.log(this)

}
name();
const course = {
    tite: 'js',
    student: ['mahdi', 'emad', 'ali'],
    showStudent:function() {
        this.student.forEach(function(student){
            console.log(student)
        })
    }
}
course.showStudent();
/// FACTORY FUNCTION
function createCorese(title,student){
    return{
        title,
        student,
        showStudents:function(){
            this.student.forEach(function(student){
                console.log(student)
            })
        }
    }
}
const coreseData=createCorese('js',['emad','musa', 'soroush']);
console.log(coreseData);
/// constructor function

function CreateCorese(title,student){

    this.title=title,
    this.student=student,
    showStudents=function(){
        this.student.forEach(function(student){
            console.log(student)
        })
    }
}
const jsCorse=new CreateCorese('js',"['emad','musa', 'soroush']");
console.log(jsCorse)
