package familybudge.repository;

import familybudge.entity.Transaction;
import familybudge.entity.User;
import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;

public interface TransactionRepository extends CrudRepository<Transaction, Long> {
    Iterable<Transaction> findAllByUser(User user);
}
