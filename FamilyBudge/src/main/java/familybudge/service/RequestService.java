
package familybudge.service;

import familybudge.entity.Request;
import familybudge.entity.User;
import familybudge.entity.User.Role;
import familybudge.repository.RequestRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RequestService {
    
    @Autowired
    private RequestRepository requestRepository;
    
    public Iterable<Request> listByRole(User user) {
        Role role = user.getRole();
        if (role == Role.USER) {
            return requestRepository.findAllByUser(user);
        } 
        else if (role == Role.ADMIN) {
            return requestRepository.findAll();
        }
        return Collections.emptyList();
    }
    
    public Request create(Request request, User user) {
        request.setUser(user);
        return requestRepository.save(request);
    }
    
    public Request update(long id, Request request) {
        Request currentRequest = requestRepository.findOne(id);
        return requestRepository.save(request);
    }

    public void delete(long id) {
        requestRepository.delete(id);
    }

    public Request read(long id) {
        return requestRepository.findOne(id);
    }
    
}
