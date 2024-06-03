package com.study.springstudy.springmvc.chap04.entity;

import lombok.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;


/*
    CREATE TABLE tbl_board (
        board_no INT(8) PRIMARY KEY auto_increment,
        title VARCHAR(200) NOT NULL,
        content TEXT,
        writer VARCHAR(100) NOT NULL,
        view_count INT(8) DEFAULT 0,
        reg_date_time DATETIME DEFAULT current_timestamp
    );
 */

@Setter @Getter @ToString
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {

    private int boardNo; // 게시글 번호
    private String title; // 글제목
    private String content; // 글내용
    private String writer; // 작성자명
    private int viewCount; // 조회수
    private LocalDateTime regDateTime; // 작성일시
    private String account; // 글쓴이 계정명

    public Board(ResultSet rs) throws SQLException {
        this.boardNo = rs.getInt("board_no");
        this.writer = rs.getString("writer");
        this.content = rs.getString("content");
        this.title = rs.getString("title");
        this.viewCount = rs.getInt("view_count");
        this.regDateTime = rs.getTimestamp("reg_date_time").toLocalDateTime();
    }
}