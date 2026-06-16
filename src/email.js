import { isValidEmail } from './validator.js';

// 사용자 배열에서 이메일만 추출하는 함수
export function extractEmails(members) {
    if (!Array.isArray(members)) {
        return [];
    }
    return members.map(member => member.email);
}

export function getValidEmails(members) {
    return extractEmails(members).filter(isValidEmail);
}

/**
 * 사용자 배열에서 유효하지 않은 이메일만 추출한다.
 * @param {Array<{ email: string }>} members - 회원 목록
 * @returns {string[]} 유효하지 않은 이메일 문자열 배열
 */
export function getInvalidEmails(members) {
    return extractEmails(members).filter((email) => !isValidEmail(email));
}

export { isValidEmail };
