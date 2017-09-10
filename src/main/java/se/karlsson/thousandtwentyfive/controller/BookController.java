package se.karlsson.thousandtwentyfive.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import se.karlsson.thousandtwentyfive.entity.Book;
import se.karlsson.thousandtwentyfive.repository.BookRepository;


@RestController
public class BookController {
	
	@Resource
	BookRepository bookRepository;

	@RequestMapping(value="/books", method=RequestMethod.GET, produces="application/json")
    public List<Book> books() {
	    List<Book> books = bookRepository.findAll();
	    return books;
    }
	
	@RequestMapping(value="/book", method=RequestMethod.GET, produces="application/json")
    public Book book(@RequestParam(value="name") String name) {
        Book book = bookRepository.findByName(name);
        return book;
    }

}
