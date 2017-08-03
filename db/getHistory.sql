select *, cartHistory.id as scid from cartHistory
join sizeChart on sizeChart.id=cartHistory.sizeID
join pictures on pictures.id=cartHistory.picID
where cartHistory.auth0id=$1
