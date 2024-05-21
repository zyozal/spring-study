package com.study.springstudy.database.chap02;

import com.study.springstudy.database.chap01.Person;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PersonMapperTest {

    @Autowired
    PersonMapper mapper;

    @Test
    @DisplayName("정보 등록")
    void saveTest() {
        //given
        Person p = new Person(999, "마바맨", 58);
        //when
        boolean flag = mapper.save(p);
        //then
        assertTrue(flag);
    }

    @Test
    @DisplayName("아이디로 사람 정보 삭제한다.")
    void delTest() {
        //given
        long id = 999;
        //when
        boolean flag = mapper.delete(id);
        //then
        assertTrue(flag);
    }

    @Test
    @DisplayName("아이디가 300인 사람의 정보를 수정한다.")
    void updateTest() {
        //given
        Person p = new Person(300, "뉴마바", 300);
        //when
        boolean flag = mapper.update(p);
        //then
        assertTrue(flag);
    }


}