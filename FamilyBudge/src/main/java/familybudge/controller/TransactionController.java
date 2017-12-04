package familybudge.controller;

import familybudge.entity.Transaction;
import familybudge.annotation.Role;
import static familybudge.entity.User.Role.ADMIN;
import static familybudge.entity.User.Role.USER;
import familybudge.service.TransactionService;
import familybudge.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/transaction")
public class TransactionController {
    
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private UserService userService;
    
    @Role({ADMIN, USER})
    @GetMapping
    public ResponseEntity<Iterable<Transaction>> list() {
        return ResponseEntity.ok(transactionService.listByRole(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @PostMapping
    public ResponseEntity<Transaction> create(@RequestBody Transaction transaction) {
        return ResponseEntity.ok(transactionService.create(transaction, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Transaction> read(@PathVariable String id) {
        Transaction read = transactionService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Transaction> update(@PathVariable long id, @RequestBody Transaction transaction) {
        Transaction updated = transactionService.update(id, transaction);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        transactionService.delete(id);
        return ResponseEntity.ok().build();
    }
}
