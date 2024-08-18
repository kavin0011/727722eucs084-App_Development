package com.example.mobilerecharge.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import com.example.mobilerecharge.Model.History;
import com.example.mobilerecharge.Service.HistoryService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin("http://localhost:3000/")
public class HistoryController {

    private static final Logger logger = LoggerFactory.getLogger(HistoryController.class);

    @Autowired
    private HistoryService historyService;

    @PostMapping("/posthistory")
    public History posthistory(@RequestBody History history) {
        try {
            logger.debug("Received request to post history: {}", history);
            return historyService.postHistory(
                    history.getName(),
                    history.getNumber(),
                    history.getAmount(),
                    history.getStatus(),
                    history.getProvider(),
                    history.getType(),
                    history.getOffers(),
                    // history.getDate(),
                    history.getUser().getId());
        } catch (Exception e) {
            logger.error("Error occurred while posting history", e);
            throw new RuntimeException("Error occurred while posting history: " + e.getMessage());
        }
    }

    @GetMapping("/gethistory")
    public List<History> getMethodName(@RequestParam int id) {
        return historyService.getallhistoryofuser(id);
    }

    @GetMapping("/getrecentactivity")
    public List<History> getMethodName() {
        return historyService.getallhistoryforadmin();
    }

}
