package se.karlsson.thousandtwentyfive.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "BOOK")
public class Book implements Serializable {

    private static final long serialVersionUID = 7170431119653783184L;

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Person author;

    protected Book() {}

    public Book(String name, Person author) {
        this.name = name;
        this.author = author;
    }
    
    public Long getId() {
        return id;
    }

    public String getName() {
        return this.name;
    }

    public Person getAuthor() {
        return author;
    }


}