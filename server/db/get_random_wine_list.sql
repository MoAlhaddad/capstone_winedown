CREATE PROCEDURE [dbo].[pick_wine]
AS
DECLARE @count INT,
        @result INT,
        @freq INT
SET @count = (SELECT COUNT(w_name) FROM wine_entries)+1
SET @result = (SELECT FLOOR(RAND()*(@count-1)+1))
SET @freq = (SELECT FREQUENCY FROM wine_entries 
             WHERE ID = @result)+1
UPDATE wine_scores
SET Frequency = @freq
    WHERE ID = @result
 
SELECT r_Name, Frequency FROM dbo.restaurants  
    WHERE ID = @result
