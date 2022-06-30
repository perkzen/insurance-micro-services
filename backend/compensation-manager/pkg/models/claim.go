package models

import (
	"compensation-manager/pkg/types"
	"time"
)

type Claim struct {
	ID        uint         `gorm:"primary_key" json:"id"`
	UserId    uint         `gorm:"not null" json:"userId"`
	Comment   string       `json:"comment"`
	Insurance string       `json:"insurance"`
	Date      time.Time    `json:"date"`
	CreatedAt time.Time    `json:"submittedAt"`
	Status    types.Status `json:"status"`
}