package com.example.mobilerecharge.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.mobilerecharge.Model.History;

@Repository
public interface HistoryRepository extends JpaRepository<History, Integer> {

    @Query("SELECT h FROM History h WHERE h.user.id = :userId")
    List<History> findAllByUserId(@Param("userId") int userId);
}
