package com.teamflow.backend.service;

import com.teamflow.backend.dto.TeamMemberRequest;
import com.teamflow.backend.dto.TeamMemberResponse;
import com.teamflow.backend.entity.TeamMember;
import com.teamflow.backend.exception.ResourceNotFoundException;
import com.teamflow.backend.repository.TeamMemberRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TeamMemberService {

    private final TeamMemberRepository teamMemberRepository;

    public TeamMemberService(TeamMemberRepository teamMemberRepository) {
        this.teamMemberRepository = teamMemberRepository;
    }

    public TeamMemberResponse addMember(TeamMemberRequest request) {
        TeamMember member = new TeamMember();
        member.setName(request.getName());
        member.setEmail(request.getEmail());
        member.setRole(request.getRole());
        member.setDepartment(request.getDepartment());

        TeamMember savedMember = teamMemberRepository.save(member);
        return mapToResponse(savedMember);
    }

    public List<TeamMemberResponse> getAllMembers() {
        return teamMemberRepository.findAll()
                .stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public TeamMemberResponse getMemberById(Long id) {
        TeamMember member = teamMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found with id: " + id));

        return mapToResponse(member);
    }

    public TeamMemberResponse updateMember(Long id, TeamMemberRequest request) {
        TeamMember member = teamMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found with id: " + id));

        member.setName(request.getName());
        member.setEmail(request.getEmail());
        member.setRole(request.getRole());
        member.setDepartment(request.getDepartment());

        TeamMember updatedMember = teamMemberRepository.save(member);
        return mapToResponse(updatedMember);
    }

    public void deleteMember(Long id) {
        TeamMember member = teamMemberRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Team member not found with id: " + id));

        teamMemberRepository.delete(member);
    }

    private TeamMemberResponse mapToResponse(TeamMember member) {
        return new TeamMemberResponse(
                member.getId(),
                member.getName(),
                member.getEmail(),
                member.getRole(),
                member.getDepartment()
        );
    }
}
