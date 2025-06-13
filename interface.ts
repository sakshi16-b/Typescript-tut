interface Info{
    name:string,
    age:number,
    college:string
}
interface TeacherType extends Info {
    subject:string
}

var studentObj:Info={
    name:'sakshi',
    age:30,
    college:'GEU'
}
var teacherObj:TeacherType={
    name: 'Lata',
    age:50,
    college:'GEU',
    subject:'Maths'
}
var managementObj:Info={
    name:'Ram',
    age:60,
    college:'GEU'
}

