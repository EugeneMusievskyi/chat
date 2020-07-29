package com.bsa.chat.message;

import com.bsa.chat.message.dto.MessageCreationDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper
public abstract class MessageMapper {
    static MessageMapper MAPPER = Mappers.getMapper(MessageMapper.class);

    @Mapping(target = "user.id", ignore = true)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    public abstract Message messageCreationDtoToMessage(MessageCreationDto messageCreationDto);
}
