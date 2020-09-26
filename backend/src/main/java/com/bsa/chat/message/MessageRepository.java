package com.bsa.chat.message;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

public interface MessageRepository extends JpaRepository<Message, UUID> {
    @Transactional
    @Modifying
    @Query("UPDATE Message m SET m.body = :newText WHERE m.id = :id")
    void updateMessage(@Param("id") UUID id, @Param("newText") String newText);
}
