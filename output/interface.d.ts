interface Info {
    name: string;
    age: number;
    college: string;
}
interface TeacherType extends Info {
    subject: string;
}
declare var studentObj: Info;
declare var teacherObj: TeacherType;
declare var managementObj: Info;
