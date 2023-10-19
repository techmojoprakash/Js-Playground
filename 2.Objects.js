var User = {
    firstName : "Jaya",
    lastName : "Prakash",
    role : "admin",
    loginCount : 32,
    facebookSignIn : true,
    CourseList : [],
    buyCourse : function (courseName) {
        this.CourseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.CourseList.length} courses`
    },
}

console.log(User.firstName)
User.buyCourse("Javascript Fundamentals");
User.buyCourse("React Js");
User.buyCourse("Angular");
console.log(User.getCourseCount())