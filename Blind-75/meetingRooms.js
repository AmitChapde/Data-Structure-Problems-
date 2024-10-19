/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {boolean}
   */
  canAttendMeetings(intervals) {
    intervals.sort((a,b)=>a.start-b.start);
    
    for(let i=1;i<intervals.length;i++){
        let i1=intervals[i-1];
        let i2=intervals[i];

        if(i1.end>i2.start){
            return false;
        }
        return true;
    }
  }
}
let intervals = [
    { start: 1, end: 3 },
    { start: 2, end: 4 },
    { start: 5, end: 6 }
  ];
  
  let solution = new Solution();
  console.log(solution.canAttendMeetings(intervals));