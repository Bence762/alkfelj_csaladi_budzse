package familybudge.controller;

import familybudge.annotation.Role;
import familybudge.entity.Request;
import static familybudge.entity.User.Role.ADMIN;
import static familybudge.entity.User.Role.USER;
import familybudge.service.RequestService;
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
@RequestMapping("/api/request")
public class RequestController {
    
    @Autowired
    private RequestService requestService;

    @Autowired
    private UserService userService;
    
    @Role({ADMIN, USER})
    @GetMapping
    public ResponseEntity<Iterable<Request>> list() {
        return ResponseEntity.ok(requestService.listByRole(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @PostMapping
    public ResponseEntity<Request> create(@RequestBody Request request) {
        return ResponseEntity.ok(requestService.create(request, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Request> read(@PathVariable String id) {
        Request read = requestService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Request> update(@PathVariable long id, @RequestBody Request request) {
        Request updated = requestService.update(id, request);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        requestService.delete(id);
        return ResponseEntity.ok().build();
    }
}
