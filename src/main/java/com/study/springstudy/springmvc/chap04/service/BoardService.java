package com.study.springstudy.springmvc.chap04.service;

import com.study.springstudy.springmvc.chap04.common.Page;
import com.study.springstudy.springmvc.chap04.common.Search;
import com.study.springstudy.springmvc.chap04.dto.BoardDetailResponseDto;
import com.study.springstudy.springmvc.chap04.dto.BoardListResponseDto;
import com.study.springstudy.springmvc.chap04.entity.Board;
import com.study.springstudy.springmvc.chap04.mapper.BoardMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {

    private final BoardMapper mapper;

    public List<BoardListResponseDto> getList(Search page) {
        List<BoardListResponseDto> collect = mapper.findAll(page).stream()
                .map(BoardListResponseDto::new)
                .collect(Collectors.toList());
        return collect;
    }

    public BoardDetailResponseDto findOne(int boardNo) {
        return new BoardDetailResponseDto(mapper.findOne(boardNo));
    }

    public boolean save(Board board) {
        return mapper.save(board);
    }


    public boolean delete(int boardNo) {
        return mapper.delete(boardNo);
    }

    public void upViewCount(int boardNo) {
        mapper.upViewCount(boardNo);
    }

    public int getCount() {
        return mapper.count();
    }
}