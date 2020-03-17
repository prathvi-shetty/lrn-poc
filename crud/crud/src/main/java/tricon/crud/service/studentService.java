package tricon.crud.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.stereotype.Service;
import tricon.crud.model.Student;
import tricon.crud.repository.studentRepo;

import javax.management.Query;
import java.util.List;
import java.util.Optional;
import java.util.Queue;

@Service
public class studentService {
    @Autowired
    private studentRepo studentR;
    public String createStudent(String name, String place){
        Student student = new Student(name, place);
        studentR.save(student);
        return ("New student created with id"+ student.getId());
    }
    public List<Student> listAll(){
        return studentR.findAll();
    }
    public Optional<Student> getStudentById(String id){
        return studentR.findById(id);
    }
    public String deleteStudentById(String id){
        studentR.deleteById(id);
        return id;
    }
    public String update(String id, String name, String place){
        Optional<Student> updateStudent = studentR.findById(id);
        Student stu = updateStudent.get();
        stu.setName(name);
        stu.setPlace(place);
        studentR.save(stu);
        return  ("User with id:"+id+"updated");

    }
}
