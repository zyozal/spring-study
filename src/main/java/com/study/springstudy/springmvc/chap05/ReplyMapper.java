package com.study.springstudy.springmvc.chap05.mapper;

import com.study.springstudy.springmvc.chap04.common.Page;
import com.study.springstudy.springmvc.chap05.entity.Reply;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ReplyMapper {

    // 댓글 등록
    boolean save(Reply reply);

    // 댓글 수정
    boolean modify(Reply reply);

    // 댓글 삭제
    boolean delete(long replyNo);

    // 특정 게시물에 달린 댓글 목록 조회
    List<Reply> findAll(@Param("bno") long boardNo,
                        @Param("p") Page page);

    // 총 댓글 수 조회
    int count(long boardNo);

    long findBno(long rno);
}