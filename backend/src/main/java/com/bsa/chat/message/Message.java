package com.bsa.chat.message;

import com.bsa.chat.db.BaseEntity;
import com.bsa.chat.user.User;
import lombok.*;

import javax.persistence.*;

@Data
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "messages")
public class Message extends BaseEntity {
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JoinColumn(name = "office_id")
    private User user;

    private String text;
}
