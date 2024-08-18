package com.example.mobilerecharge.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mobilerecharge.Model.History;
import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Model.Userinfo;
// import com.example.mobilerecharge.Model.User;
import com.example.mobilerecharge.Repository.HistoryRepository;

@Service
public class HistoryService {

    @Autowired
    private HistoryRepository historyRepository;

    public History postHistory(String name, String number, String amount, String status, String provider, String type,
            String offers, int userId) {
        History history = new History();
        history.setName(name);
        history.setNumber(number);
        history.setAmount(amount);
        history.setStatus(status);
        history.setProvider(provider);
        history.setType(type);
        history.setOffers(offers);
        // history.setDate(date);
        Userinfo user = new Userinfo();
        user.setId(userId);
        history.setUser(user);

        historyRepository.save(history);
        return history;
    }

    public List<History> getallhistoryofuser(int userid) {
        return historyRepository.findAllByUserId(userid);
    }

    public List<History> getallhistoryforadmin() {
        return historyRepository.findAllHistory();
    }
}
