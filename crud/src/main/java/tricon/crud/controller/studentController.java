package tricon.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tricon.crud.model.Student;
import tricon.crud.service.studentService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
public class studentController {
    @Autowired
    private studentService service;
    @GetMapping("/list")
    public List<Student> listStudents(){
        return service.listAll();
    }

    @PostMapping("/add")
    public String createStudent(
            @RequestParam("name") String name,
            @RequestParam("place") String place

    ){
        return service.createStudent(name,place);
    }
    @PostMapping("/listStudent")
    public Optional<Student> getStudentById(@RequestParam("id") String id){
        return service.getStudentById(id);
    }
    @PostMapping("/delete")
    public String delete(@RequestParam("id") String id){
        return service.deleteStudentById(id);
    }
    @PostMapping("/update")
    public String update(@RequestParam("id") String id,
                         @RequestParam("name") String name,
                         @RequestParam("place") String place){
        return service.update(id,name,place);
    }

}
