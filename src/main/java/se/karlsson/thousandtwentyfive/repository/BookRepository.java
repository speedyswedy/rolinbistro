package se.karlsson.thousandtwentyfive.repository;

import java.util.List;

import org.springframework.data.repository.Repository;

import se.karlsson.thousandtwentyfive.entity.Book;
import se.karlsson.thousandtwentyfive.entity.Person;

public interface BookRepository extends Repository<Book, Long> {

    List<Book> findAll();

    Book findByNameAndAuthorAllIgnoringCase(String name, Person author);
    
    Book findByName(String name);

}
