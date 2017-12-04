package familybudge.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.Column;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    
    @JoinColumn
    @ManyToOne(targetEntity = User.class, optional = false)
    @JsonIgnoreProperties("transactions")
    private User user;
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String types;
    
    @Column(nullable = false)
    private String dates;
    
    @Column(nullable = false)
    private String quantity;
    
    @Column(nullable = true)
    private String comment;
    
     @Column(nullable = true)
    private String picture;

}