package com.minhaz.guessing.repository;

import com.minhaz.guessing.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT c FROM User c WHERE c.userName = ?1")
    List<User> findByUsername(String userName);
}