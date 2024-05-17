package com.study.springstudy.springmvc.chap04.controller;

import com.study.springstudy.springmvc.chap03.entity.Score;
import com.study.springstudy.springmvc.chap03.repository.ScoreRepository;
import com.study.springstudy.springmvc.chap04.entity.Board;
import com.study.springstudy.springmvc.chap04.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardRepository repository;

//    // 1. 목록 조회 요청 (/board/list : GET)
    @GetMapping("/list")
    public String list() {

//        System.out.println("/board/list : GET!");
//
//        List<Board> boardList = repository.findAll();
//
        return "board/list";
    }


    // 2. 게시글 쓰기 양식 화면 열기 요청 (/board/write : GET)
    @GetMapping("/write")
    public String write() {

        return "board/write";
    }

    // 3. 게시글 등록 요청 (/board/write : POST)
    // -> 목록조회 요청 리다이렉션
    @PostMapping("/write")
    public String save(Board board) {

        System.out.println("board = " + board);
        repository.save(board);
        return "redirect:/board/list";
    }

    // 4. 게시글 삭제 요청 (/board/delete : GET)
    // -> 목록조회 요청 리다이렉션
    @GetMapping("/delete")
    public String delete() {

        return "redirect:/board/list";
    }



    // 5. 게시글 상세 조회 요청 (/board/detail : GET)

    @GetMapping("/detail")
    public String detail() {

        return "board/detail";
    }

}