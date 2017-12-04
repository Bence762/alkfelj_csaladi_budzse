
package familybudge.repository;

import familybudge.entity.Request;
import familybudge.entity.User;
import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;

public interface RequestRepository extends CrudRepository<Request, Long> {
    Iterable<Request> findAllByUser(User user);
}
