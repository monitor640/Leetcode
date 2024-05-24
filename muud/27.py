class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        se = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[se]=nums[i]
                se+=1
        return se
