const baseUrl = `http://ergast.com/api/f1/`;

export function getSeasonData(year) {
    return fetch(`${baseUrl}${year}/results/1.json`)
        .then(response => response.json())
        .then(data => data.MRData.RaceTable.Races)
};

export function getSeasonChampion(year) {
    return fetch(`${baseUrl}${year}/driverStandings/1.json`)
        .then(response => response.json())
        .then(data => data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0])
};
