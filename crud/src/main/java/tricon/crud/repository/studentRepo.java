package tricon.crud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import tricon.crud.model.Student;

@Repository
public interface studentRepo extends MongoRepository<Student, String> {
}
