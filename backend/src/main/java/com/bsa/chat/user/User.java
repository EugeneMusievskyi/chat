package com.bsa.chat.user;

import com.bsa.chat.db.BaseEntity;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;
import java.util.UUID;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "avatar_link")
    private String avatarLink;

    @Builder
    public User(UUID id, String username, String password, String avatarLink, Date createAt, Date editedAt) {
        super(id, createAt, editedAt);
        this.username = username;
        this.password = password;
        this.avatarLink = avatarLink;
    }
}
