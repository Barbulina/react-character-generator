export function randomIntFromInterval(min = 1, max = 6): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
