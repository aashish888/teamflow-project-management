package com.teamflow.backend.controller;

import com.teamflow.backend.dto.TeamMemberRequest;
import com.teamflow.backend.dto.TeamMemberResponse;
import com.teamflow.backend.service.TeamMemberService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/team-members")
public class TeamMemberController {

    private final TeamMemberService teamMemberService;

    public TeamMemberController(TeamMemberService teamMemberService) {
        this.teamMemberService = teamMemberService;
    }

    @PostMapping
    public ResponseEntity<TeamMemberResponse> addMember(@Valid @RequestBody TeamMemberRequest request) {
        TeamMemberResponse response = teamMemberService.addMember(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TeamMemberResponse>> getAllMembers() {
        return ResponseEntity.ok(teamMemberService.getAllMembers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TeamMemberResponse> getMemberById(@PathVariable Long id) {
        return ResponseEntity.ok(teamMemberService.getMemberById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TeamMemberResponse> updateMember(@PathVariable Long id,
                                                           @Valid @RequestBody TeamMemberRequest request) {
        return ResponseEntity.ok(teamMemberService.updateMember(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMember(@PathVariable Long id) {
        teamMemberService.deleteMember(id);
        return ResponseEntity.ok("Team member deleted successfully");
    }
}
