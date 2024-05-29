package com.study.springstudy.springmvc.chap05.mapper;

import com.study.springstudy.springmvc.chap05.entity.Member;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Service;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class MemberMapperTest {

    @Autowired
    MemberMapper memberMapper;

    @Test
    @DisplayName("회원가입에 성공해야 한다")
    void saveTest() {
        //given
        Member member = Member.builder()
                .account("kuromi")
                .password("123123")
                .name("쿠로미")
                .email("kuromi@gmail.com")
                .build();
        //when
        boolean flag = memberMapper.save(member);

        //then
        assertTrue(flag);
    }
    @Test
    @DisplayName("kuromi 계정명을 조회하면 그 회원의 이름이 쿠로미여야 한다")
    void findOneTest() {
        //given
        String acc = "kuromi";
        //when
        Member foundMember = memberMapper.findOne(acc);
        //then
        assertEquals("쿠로미", foundMember.getName());
    }



    @Test
    @DisplayName("계정명이 kuromi인 회원은 중복확인 결과가 true이다.")
    void existsTest() {
        //given
        String acc = "kuromi";
        //when
        boolean flag = memberMapper.existsById("account", acc);
        //then
        assertTrue(flag);
    }

    @Test
    @DisplayName("계정명이 newjeans인 회원은 중복확인 결과가 false이다.")
    void existsTest2() {
        //given
        String acc = "newjeans";
        //when
        boolean flag = memberMapper.existsById("account", acc);
        //then
        assertFalse(flag);
    }


}