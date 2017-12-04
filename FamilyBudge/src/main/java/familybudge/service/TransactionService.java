package familybudge.service;

import familybudge.entity.Transaction;
import familybudge.entity.User;
import familybudge.entity.User.Role;
import familybudge.repository.TransactionRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService {
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    public Iterable<Transaction> listByRole(User user) {
        Role role = user.getRole();
        if (role == Role.USER) {
            return transactionRepository.findAllByUser(user);
        } 
        else if (role == Role.ADMIN) {
            return transactionRepository.findAll();
        }
        return Collections.emptyList();
    }
    
    public Transaction create(Transaction transaction, User user) {
        transaction.setUser(user);
        return transactionRepository.save(transaction);
    }
    
    public Transaction update(long id, Transaction transaction) {
        Transaction transactionRequest = transactionRepository.findOne(id);
        return transactionRepository.save(transaction);
    }

    public void delete(long id) {
        transactionRepository.delete(id);
    }

    public Transaction read(long id) {
        return transactionRepository.findOne(id);
    }
    
}
